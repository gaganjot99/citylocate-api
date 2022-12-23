pipeline {
  agent any
  stages {
    stage('build') {
      parallel {
        stage('build') {
          steps {
            bat 'node --version'
          }
        }

        stage('install dep') {
          steps {
            bat 'npm i'
          }
        }

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