const { execFile } = require('child_process');

const pythonScript = 'C:/Users/matth/Documents/pre-learn/ML/ClassifyYouTubeComments.py';

execFile('python', [pythonScript], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});