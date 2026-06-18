const generatePdfAndShare = async () => {
  try {
    if (!reportRef.current) return;

    const imageUri = await captureRef(reportRef, {
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

    const { uri } = await Print.printToFileAsync({
      html,
    });

    await Sharing.shareAsync(uri);
  } catch (error) {
    console.log(error);
  }
};