ssh -i "awesome-project-api.pem" ubuntu@ec2-100-26-183-97.compute-1.amazonaws.com /bin/bash << EOF
 cd ~/awesome-project-api
 git pull
 npm i
 pm2 restart index.js
 exit
 EOF