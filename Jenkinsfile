node{
    stage('Git checkout'){
        git branch: 'main', url: 'https://github.com/eguniti/frontend_orig.git'
    }
    
    stage('Build Image and push to ECR'){
        sh 'cd /var/lib/jenkins/workspace/create_frontend_image/'
        sh 'docker image build -t frontend/$JOB_NAME:v1.$BUILD_NUMBER .'
        sh 'docker tag frontend/$JOB_NAME:v1.$BUILD_NUMBER 186319575019.dkr.ecr.us-east-1.amazonaws.com/frontend:v1.$BUILD_NUMBER'
        sh 'aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 186319575019.dkr.ecr.us-east-1.amazonaws.com'
        sh 'docker push 186319575019.dkr.ecr.us-east-1.amazonaws.com/frontend:v1.$BUILD_NUMBER'
    }
}
