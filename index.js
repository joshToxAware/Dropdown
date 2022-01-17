// get the current exposure id
var lastPartOfURL = window.location.href.split("/");
var currentExposureId = lastPartOfURL[lastPartOfURL.length - 1];

// Get the data
window.ddPatientsList = [
  {
    caseId: "Z2212",
    ctrId: 0,
    exposureId: 2212,
    exposureLock: false,
    exposureStatus: "Open",
    patientAge: "42 Years",
    patientGender: "Male",
    patientName: "James, Liam",
    substanceName: "Pizza Hut pepperoni pizza"
  },
  {
    caseId: "Z2214",
    ctrId: 0,
    exposureId: 2214,
    exposureLock: false,
    exposureStatus: "Open",
    patientAge: "13 Years",
    patientGender: "Female",
    patientName: "Young, Grace",
    substanceName: "Pizza Hut pepperoni pizza"
  },
  {
    caseId: "Z2215",
    ctrId: 0,
    exposureId: 2215,
    exposureLock: false,
    exposureStatus: "Open",
    patientAge: "13 Years",
    patientGender: "Male",
    patientName: "Fell, Joe",
    substanceName: "Pizza Hut pepperoni pizza"
  },
  {
    caseId: "Z2216",
    ctrId: 0,
    exposureId: 2216,
    exposureLock: true,
    exposureStatus: "Open",
    patientAge: "14 Years",
    patientGender: "Male",
    patientName: "Hornee, Charlie",
    substanceName: "Beer"
  }
];

// set which patient to select
var selectedIndexPosition = null;
for (var i = 0; i < window.ddPatientsList.length; i++) {
  if (window.ddPatientsList[i].exposureId == currentExposureId) {
    selectedIndexPosition = i;
  }
}

// initialize DropDownList component
var dropDownListObj = new ej.dropdowns.DropDownList({
  // set the patients data to dataSource property
  dataSource: window.ddPatientsList,
  // map the appropriate columns to fields property
  fields: { text: 'Name', value: 'caseId' },
  // set the template content for list items
  itemTemplate: '<div class="patientWrapper"><div class="patientInfoWrapper"><div class="patientName">${patientName}</div><div class="patientInfo"><span>${caseId}</span><span>${substanceName}</span><span>${patientAge}</span></div></div><img src="https://dev.toxaware.net/assets/Images/Padlock_Gold.png" alt="Expousre Locked: ${exposureLock}" class="${exposureLock}LockImage"></div>',
  // set the template content for displays the selected items in input element.
  valueTemplate:
    '<div class="itemSelected"><span class="itemSelectedName">${patientName}</span></div>',
  // set the placeholder to DropDownList input element
  placeholder: 'Switch between patients',
  // set the height of the popup element
  popupHeight: '300px',
  index: selectedIndexPosition,
  // the change event
  change: (event) => {
    // do any nessecary validation before redirecing. Check if the exposure needs to be saved. 
    // Should the dropdown open patients in a new tab, need to check if they already have it open
    var error = false;
    if (error == true) {
      // display an error message to user
    }

    else {
      // redirect the user to the approptiate case
      window.location.assign("/exposure/edit/" + event.itemData.caseId.substring(1));
    }
  }
});

dropDownListObj.appendTo('#patients');

// logic for if the next paitent button is needed
if (currentExposureId < window.ddPatientsList[window.ddPatientsList.length - 1].exposureId) {
  for (var i = 0; i < window.ddPatientsList.length; i++) {
    if (window.ddPatientsList[i].exposureId == currentExposureId) {
      dropDownListObj.addItem({
        caseId: window.ddPatientsList[i+1].caseId,
        ctrId: 0,
        exposureId: window.ddPatientsList[i+1].exposureId,
        exposureLock: false,
        exposureStatus: "Open",
        patientAge: "",
        patientGender: "",
        patientName: "Next paitent",
        substanceName: ""
      });
    }
  }
}

// logic for if the previous paitent button is needed
if (currentExposureId > window.ddPatientsList[0].exposureId) {
  for (var i = 0; i < window.ddPatientsList.length; i++) {
    if (window.ddPatientsList[i].exposureId == currentExposureId) {
      dropDownListObj.addItem({
        caseId: window.ddPatientsList[i-1].caseId,
        ctrId: 0,
        exposureId: window.ddPatientsList[i-1].exposureId,
        exposureLock: false,
        exposureStatus: "Open",
        patientAge: "",
        patientGender: "",
        patientName: "Previous paitent",
        substanceName: ""
      });
    }
  }
}