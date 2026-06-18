import { captureRef } from "react-native-view-shot";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

// Accept a ref to the view to capture. reportRef should be a React RefObject
export const generatePdfAndShare = async (reportRef: any) => {
  try {
    if (!reportRef || !reportRef.current) return;

    const imageUri = await captureRef(reportRef.current, {
      format: "png",
      quality: 1,
    });

    const html = `
      <html>
        <body style="margin:0;padding:20px;">
          <img
            src="${imageUri}"
            style="width:100%;"
          />
        </body>
      </html>
    `;

    const { uri } = await Print.printToFileAsync({ html });

    await Sharing.shareAsync(uri);
  } catch (error) {
    console.log(error);
  }
};