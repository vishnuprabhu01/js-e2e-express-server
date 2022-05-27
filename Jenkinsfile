pipeline {
  agent {label 'Node_npm'}
    
  stages {
        
    stage('source code') {
      steps {
        git 'https://github.com/vishnuprabhu01/js-e2e-express-server.git'
      }
    }
     
    stage('Build') {
      steps {
        sh 'npm install'
     }
    } 
  } 
}