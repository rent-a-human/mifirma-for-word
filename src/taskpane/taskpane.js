/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80_1.png";

/* global document, Office, Word */
/* global document, Office, require */
const ssoAuthHelper = require("./../helpers/ssoauthhelper");

Office.onReady(info => {
  if (info.host === Office.HostType.Word) {
    localStorage.setItem('outsideOffice', false);
    document.getElementById("getGraphDataButton").onclick = ssoAuthHelper.getGraphData();
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  return Word.run(async context => {
    localStorage.setItem('outsideOffice', true);
    localStorage.setItem('userFromOffice', false);
    localStorage.setItem('noob', '0');//garantiza que no usa info de office, ya que fue llamado desde clic en iniciar sesion
    Office.context.ui.displayDialogAsync("https://frosty-archimedes-0b2d91.netlify.app/app.html", { width:30, height:75 });   

   // if (localStorage.getItem("word-document1") === null) {
      var documentName = "empty";
      if(Office.context.document.url != null){
        var url = Office.context.document.url;
        documentName =  url.substring(url.lastIndexOf('/') + 1);
      }
      
      Office.context.document.getFileAsync(Office.FileType.Pdf, {sliceSize:4194304}, (result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
          const file = result.value;
          file.getSliceAsync(0, (result) => {
            if (result.status === Office.AsyncResultStatus.Succeeded) {
              const { data } = result.value;
              console.log('DATA: ');
              console.log(data);
              if (data) {
                const buff = Buffer.from(data, 'utf-8');
                const base64 = buff.toString('base64');
                console.log('base64: ');
                console.log(base64);
                localStorage.setItem('word-document1', base64);
                localStorage.setItem('word-document-name1', documentName);
                console.log("Word to PDF y guardado en LocalStorage:");
                console.log(localStorage.getItem('word-document-name1'));
                console.log(localStorage.getItem('word-document1'));
                //console.log(Office.context.document.Name);
              }
            }
            file.closeAsync(result => {
              console.log(result.status);
            });
          });
        } else
        {
          console.log("Error al cargar pdf ")
        }
      });
    //}//

    await context.sync();
  });
}
