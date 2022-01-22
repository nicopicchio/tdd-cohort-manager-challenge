const Cohort = require('../src/cohort.js')
const Student = require('../src/student.js')

class CohortManager {

    constructor() {
        this.cohorts = [];
    }
    
    createNewCohort(name) {
        this.cohorts.push(new Cohort(name))
        console.log(this.cohorts)
        return this.cohorts
    }
    
    createNewStudent(id, firstName, lastName, githubUsername, email) {
        const newStudent = new Student(id, firstName, lastName, githubUsername, email)
        return newStudent
    }

    addStudentToCohort(studentID, cohortName) {
        
    }

    searchCohortByName(name) {
        for (const cohort of this.cohorts) {
            if (cohort.cohortName === name) {
                return cohort
            }
        }
        return 'Cohort not found!'
    }

    removeCohortByName(name) {
        for (let i = 0; i < this.cohorts.length; i++) {
            if (this.cohorts[i].cohortName === name) {
                this.cohorts.splice(i, 1)
            }
            return 'Cohort not found!'
        }
    }

    getAllCohorts() {
        return this.cohorts
    }

}

module.exports = CohortManager;