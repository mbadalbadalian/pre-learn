const { exec } = require('child_process');

const pythonScript = 'C:/Users/matth/Documents/pre-learn/ML/ClassifyYouTubeComments.py';

exec(`python ${pythonScript}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});