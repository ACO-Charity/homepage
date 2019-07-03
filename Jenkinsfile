pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
		sh 'npm install'
		sh 'npm run build'
		sh 'npm run export'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
	    when{
		    expression{
			    return (env.BRANCH_NAME == 'develop' || env.BRANCH_NAME == 'master')
			}
		}
            steps {
                echo 'Deploying....'
                sh '/opt/deployScripts/acoHomepage/' + env.BRANCH_NAME + '_deploy.sh'
            }
        }
    }
}
