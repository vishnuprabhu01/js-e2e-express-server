pipeline {
  agent {label 'mvn_new1'}
  tools {
    nodejs 'nodejs'
    
  stages {
        
    stage('source code') {
      steps {
        git branch: 'main', url: 'https://github.com/vishnuprabhu01/js-e2e-express-server.git'
      }
    }
     
    stage('Dependencies & build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    } 
    stage('pack') {
      steps {
        sh script 'npm pack'
      }
    }
     stage('Test results') {
            steps {
                sh 'npm test'
            }
        }
        stage('Sonar Analysis') {
            steps {
                sh 'npm run sonar'
            }
        }
      
  } 
}

