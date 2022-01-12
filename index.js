// The data array. Note that images are just placeholders
var currentCaseId = 2215;

window.ddPatientsList = [
  {
    Name: 'John Smith',
    CaseId: 'W2264&nbsp;&bull;&nbsp;',
    Lock: '',
    PrimarySubstance: 'Aspirin&nbsp;&bull;&nbsp;',
    Age: '14 years old',
    Image:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
    URL: '#',
  },
  {
    Name: 'Bryan Smith',
    CaseId: 'W2265&nbsp;&bull;&nbsp;',
    Lock: '<img src="https://dev.toxaware.net/assets/Images/Padlock_Gold.png" alt="Call Locked" class="lockImage">',
    PrimarySubstance: 'Beer&nbsp;&bull;&nbsp;',
    Age: '42 years old',
    Image:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
    URL: '#',
  },
  {
    Name: 'Add patient',
    CaseId: '',
    Lock: '',
    PrimarySubstance: '',
    Age: '',
    Image: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png',
    URL: '#',
  },
  {
    Name: 'Next patient',
    CaseId: 'W2286',
    Lock: '',
    PrimarySubstance: '',
    Age: '',
    Image: 'https://www.pngrepo.com/png/238362/512/right-arrow-next.png',
    URL: 'https://dev.toxaware.net/exposure/edit/' + (currentCaseId + 1),
  },
  {
    Name: 'Previous patient',
    CaseId: 'W2284',
    Lock: '',
    PrimarySubstance: '',
    Age: '',
    Image: 'http://cdn.onlinewebfonts.com/svg/img_529.png',
    URL: 'https://dev.toxaware.net/exposure/edit/' + (currentCaseId - 1),
  },
];
// initialize DropDownList component
var dropDownListObj = new ej.dropdowns.DropDownList({
  // set the patients data to dataSource property
  dataSource: window.ddPatientsList,
  // map the appropriate columns to fields property
  fields: { text: 'Name' },
  // set the template content for list items
  itemTemplate:
    '<div class="patientWrapper"><img src="${Image}" alt="${Name}" class="patientImage"><div class="patientInfoWrapper"><div class="patientName">${Name}</div><div class="patientInfo">${CaseId} ${PrimarySubstance} ${Age}</div></div>${Lock}</div>',
  // set the template content for displays the selected items in input element.
  valueTemplate:
    '<div class="itemSelected"><img class="itemSelectedImage" src="${Image}" height="26px" width="26px" alt="${Name}"><span class="itemSelectedName">${Name}</span></div>',
  // set the placeholder to DropDownList input element
  placeholder: 'Switch between patients',
  // set the height of the popup element
  popupHeight: '300px',
  // bind the change event
  change: function() {
    // somehow redirect to the appropriate URL
  },
});
dropDownListObj.appendTo('#patients');
