pipeline {
    agent any

    tools {
        nodejs 'Node'
    }

    environment {
        CHROME_BIN = '/usr/bin/chromium'
    }

    stages {
        stage('Verificar ambiente') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Instalar dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build da aplicação') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Pipeline Angular executada com sucesso!'
        }

        failure {
            echo 'A pipeline falhou. Verifique os logs do Jenkins.'
        }
    }
}