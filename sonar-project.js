const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
  {
    serverUrl : 'http://52.27.78.70:9000//',
    options: {
      'sonar.projectName': 'My App',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': '.',
      'sonar.login': 'admin',
      'sonar.password': 'admin@123',
      //'sonar.tests': 'specs',
      'sonar.language' : 'js',
      'sonar.projectVersion': '1.0'
    },
  },
  () => process.exit()
);