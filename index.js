// The data array. Note that images are just placeholders
var currentCaseId = 2215;

window.ddPaitentsList = [
  {
    Name: 'John Smith',
    CaseId: 'W2264',
    Lock: '',
    PrimarySubstance: 'Aspirin',
    Age: '14 years old',
    Image:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
    URL: '#',
  },
  {
    Name: 'Bryan Smith',
    CaseId: 'W2265',
    Lock: '<img class="lockImage" src="https://dev.toxaware.net/assets/Images/Padlock_Gold.png" alt="Call Locked"></div>',
    PrimarySubstance: 'Beer',
    Age: '42 years old',
    Image:
      'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
    URL: '#',
  },
  {
    Name: 'Add paitent',
    CaseId: '',
    Lock: '',
    PrimarySubstance: '',
    Age: '',
    Image: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png',
    URL: '#',
  },
  {
    Name: 'Next paitent',
    CaseId: 'W2286',
    Lock: '',
    PrimarySubstance: '',
    Age: '',
    Image: 'https://www.pngrepo.com/png/238362/512/right-arrow-next.png',
    URL: 'https://dev.toxaware.net/exposure/edit/'+(currentCaseId+1),
  },
  {
    Name: 'Previous paitent',
    CaseId: 'W2284',
    Lock: '',
    PrimarySubstance: '',
    Age: '',
    Image: 'http://cdn.onlinewebfonts.com/svg/img_529.png',
    URL: 'https://dev.toxaware.net/exposure/edit/'+(currentCaseId-1),
  },
];
// initialize DropDownList component
var dropDownListObj = new ej.dropdowns.DropDownList({
  // set the paitents data to dataSource property
  dataSource: window.ddPaitentsList,
  // map the appropriate columns to fields property
  fields: { text: 'Name' },
  // set the template content for popup header element
  headerTemplate:
    '<div class="header"> <span>Photo</span> <span class="info">Paitent Info</span></div>',
  // set the template content for list items
  itemTemplate:
    '<div class="itemWrapper"><img class="paitentImage" src="${Image}" alt="${Name}"><div class="paitentInfoWrapper"><div class="paitentName">${Name}</div><div class="caseId">${CaseId}&nbsp;&bull;&nbsp;${PrimarySubstance}&nbsp;&bull;&nbsp;${Age}</div></div>${Lock}',
  // set the template content for displays the selected items in input element.
  valueTemplate:
    '<div style="width:100%;height:100%;">' +
    '<img class="value" src=" ${Image} " height="26px" width="26px" alt="Paitent"/>' +
    '<div class="name"> ${Name} </div></div>',
  // set the placeholder to DropDownList input element
  placeholder: 'Switch between paitents',
  // set the height of the popup element
  popupHeight: '300px',
  // bind the change event
  change: function() {
    // somehow redirect to the appropriate URL
  },
});
dropDownListObj.appendTo('#paitents');
