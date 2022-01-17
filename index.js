// these need to be changed 
var currentExposureId = 2214;

// The data array. Note that images are just placeholders. Order by CaseId
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
    substanceName: "Pizza Hut pepperoni pizza",

    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
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
    substanceName: "Pizza Hut pepperoni pizza",

    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
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
    substanceName: "Pizza Hut pepperoni pizza",

    image:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
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
    substanceName: "Beer",

    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
  }
];

// initialize DropDownList component
var dropDownListObj = new ej.dropdowns.DropDownList({
  // set the patients data to dataSource property
  dataSource: window.ddPatientsList,
  // map the appropriate columns to fields property
  fields: { text: 'Name', value: 'caseId' },
  // set the template content for list items
  itemTemplate:
    '<div class="patientWrapper"><img src="${image}" alt="${patientName}" class="patientImage"><div class="patientInfoWrapper"><div class="patientName">${patientName}</div><div class="patientInfo">${caseId} ${substanceName} ${patientAge}</div></div><img src="https://dev.toxaware.net/assets/Images/Padlock_Gold.png" alt="Expousre Lock Status: ${exposureLock}" class="${exposureLock}LockImage"></div>',
  // set the template content for displays the selected items in input element.
  valueTemplate:
    '<div class="itemSelected"><img class="itemSelectedImage" src="${image}" height="26px" width="26px" alt="${patientName}"><span class="itemSelectedName">${patientName}</span></div>',
  // set the placeholder to DropDownList input element
  placeholder: 'Switch between patients',
  // set the height of the popup element
  popupHeight: '300px',
  // the change event
  change: (event) => {
    // do any nessecary validation before redirecing. DR mentioned that 
    if (1 == 2) {
      // add error.
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
  // fetch this from database
  dropDownListObj.addItem({
    caseId: "Z2214",
    ctrId: 0,
    exposureId: 2214,
    exposureLock: false,
    exposureStatus: "Open",
    patientAge: "",
    patientGender: "",
    patientName: "Next paitent",
    substanceName: "",

    image: 'https://www.pngrepo.com/png/238362/512/right-arrow-next.png'
  });
}

// logic for if the previous paitent button is needed
if (currentExposureId > window.ddPatientsList[0].exposureId) {
  // fetch this from database
  dropDownListObj.addItem({
    caseId: "Z2212",
    ctrId: 0,
    exposureId: 2214,
    exposureLock: false,
    exposureStatus: "Open",
    patientAge: "",
    patientGender: "",
    patientName: "Previous paitent",
    substanceName: "",

    image: 'https://www.pngrepo.com/png/238362/512/right-arrow-next.png'
  });
}