pipeline {
    agent any

    tools {
        nodejs 'Node'
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
                sh 'npm ci'
            }
        }

        stage('Executar testes') {
            steps {
                sh 'npm run test -- --watch=false --browsers=ChromeHeadless'
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