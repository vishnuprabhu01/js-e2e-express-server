pipeline {
  agent {label 'Node_npm'}
    
  stages {
        
    stage('source code') {
      steps {
        git branch: 'main', url: 'https://github.com/vishnuprabhu01/js-e2e-express-server.git'
      }
    }
     
    stage('Build & quality') {
      steps {
        script {
          withSonarQubeEnv('SONAR_MAIN')
        sh 'npm install sonar:sonar'
        sh 'npm run build'
        }
        
     }
    } 
  } 
}

