lb starts LoopBack Server
Use lb acl after model has been created
lb model creates a model logic
lb property adds a property to a model logic
lb relation
lb boot-script
lb datasource

Use PersistedModel
Can set custom plural form
Use common model
lb acl (Setup Access Control, user authentication, etc.)
  single method
  find

console.ng.bluemix.net
IBM bluemix

.cfignore file
  add node_modules to this file

manifest.yml file
  applications:
  - name: name of project on bluemix
  memory: 128MB

package.json
  specify version of node
  - "engines": {
      "node": 8.1.8
  }

Google bluemix cli

bx app push

Google loopback-in-5-minutes

Relations

// need to create table for Users that is parent to Medications table
// Doctors table with Users(patients) as children.
// Doctors table will have special permissions and access and views
// Users table will have the following columns: firstName, lastName, dob, emailAddress, memberId, cardholder(boolean), medicationId(foreignKey), medNickname?(maybe), 
