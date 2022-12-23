pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'node --version'
      }
    }

    stage('start server') {
      environment {
        PORT = '3000'
      }
      steps {
        bat 'npm start'
      }
    }

  }
}