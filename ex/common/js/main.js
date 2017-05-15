
function getPatientList() {
  axios.get('http://13.124.26.215:3000/api/v1/patient')
       .then(function(response) {
         console.log(response);
       }).catch(function(error) {
         console.log(error);
       });
}

function ontest() {
  var router = $('#register');
  router.data('include', 'register2');
}

function registerPatient(patientName, gender, patientTel, patientBirth, address, bloodType) {
  axios({
    method: 'POST',
    url: 'http://13.124.26.215:3000/api/v1/patient/register',
    data: {
      patientName: patientName,
      gender: gender,
      patientTel: patientTel,
      patientBirth: patientBirth,
      address: address,
      bloodType: bloodType
    }
  }).then(function(response) {
    console.log(response);

  }).catch(function(error) {
    console.log(error);
    return error;
  });
}

function onSubmit() {
  var patientName = $('.register-form input[name=patientName]').val();
  var gender = $('.register-form #gender option:selected').text();
  var patientTel = $('.register-form input[name=patientTel]').val();
  var birthYear = $('.register-form #birth-year option:selected').text();
  var birthMonth = $('.register-form #birth-month option:selected').text();
  var birthDay = $('.register-form input[name=birth-day]').val();
  var patientBirth = birthYear + birthMonth + birthDay;
  var address = $('.register-form input[name=address]').val();
  var bloodType = $('.register-form #bloodType option:selected').text();

  console.log(patientName + gender + patientTel + patientBirth + address + bloodType);
  registerPatient(patientName, gender, patientTel, patientBirth, address, bloodType);
}
