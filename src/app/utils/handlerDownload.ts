import axios from "axios";
import { saveAs } from "file-saver";
import { PDFDocument } from "pdf-lib";

export const handlerDownload = async (setLoading: (value: boolean) => void, URL: string, fileName: string, pdf?: boolean) => {
    setLoading(true);

    if (!pdf) {
        try {
            const response = await axios.get(URL, {
                responseType: "blob",
            })
            saveAs(response.data, fileName)
        }
        catch (error) {
            console.error("Erro ao baixar a imagem:", error);
        }
        finally {
            setLoading(false);
        }
    }

    else {
        try {
            const response = await axios.get(URL, {
                responseType: "arraybuffer",
            });

            const pdfDoc = await PDFDocument.create();
            const page = pdfDoc.addPage();

            const imageBytes = new Uint8Array(response.data);

            let image;
            if (URL.endsWith(".jpg") || URL.endsWith(".jpeg")) {
                image = await pdfDoc.embedJpg(imageBytes);
            }
            else if (URL.endsWith(".png")) {
                image = await pdfDoc.embedPng(imageBytes)
            } else {
                throw new Error("Formato de imagem não suportado")
            }

            const { width, height } = image.scale(1);
            page.drawImage(image, {
                x: page.getWidth() / 2,
                y: page.getHeight() / 2,
                width: width,
                height: height,
            });

            const pdfBytes = await pdfDoc.save();
            const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
            saveAs(pdfBlob, fileName.replace(/\.[^/.]+$/, "") + ".pdf");
        }
        catch (error) {
            console.error("Erro ao gerar PDF:", error);
        }
        finally {
            setLoading(false);
        }
    }
}
