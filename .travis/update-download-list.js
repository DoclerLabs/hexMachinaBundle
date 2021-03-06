const https = require('https');
const fs = require('fs');

var gitPath = "";
process.argv.forEach((val, index) => {
  //console.log(`${index}: ${val}`);
  if(index == 2) gitPath = val;
});

if(gitPath == "") throw new Error("git path should be defined");
var downloadsFilePath = gitPath + "/_data/downloads.yml";

var options = {
  host: 'api.github.com',
  path: '/repos/DoclerLabs/hexMachina/releases',
  method: 'GET',
  headers: {'user-agent': 'node.js'}
};

return https.get(options, (res) => {
  
  var body = '';
  res.on('data', (chunk) => {
    //console.log(`BODY: ${chunk}`);
    body += chunk;
  });
  res.on('end', () => {
    console.log('No more data in response.');
    var downloads = buildDownloadList( body );
    console.log('No more data in response.');
    saveContent(downloadsFilePath, downloads);
  });
}).on('error', (err) => {
  console.error(`Got error: ${err.message}`);
});

function buildDownloadList(json)
{
  try {
    var releases = JSON.parse(json);
    
    var release, asset, log;
    downloads = "";
    for (var i = 0; i < releases.length; i++)
    {
      //console.log(releases[i]);
      release = releases[i];
      for (var j = 0; j < release.assets.length; j++)
      {
        asset = release.assets[j];
        if(asset.name.lastIndexOf('hexMachina-bundle') != -1)
        {
          downloads += `- name: Download hexMachina v${release.tag_name}\n`;
          downloads += `  link: ${asset.browser_download_url}\n`;
          //log.push(release.tag_name);
          //log.push(asset.name);
          //log.push(asset.browser_download_url);
        }
      }
    }
    return downloads;
  } catch (err) {
    console.error(`Unable to parse response as JSON ${err.message}`);
  }
}

function saveContent(path, text)
{
  console.log(path, text);
  var err = fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
  if(!err)
  {
    fs.writeFileSync(path, text);
  } else
  {
    throw new Error(`cannot acces on file : ${err}`)
  }
}
