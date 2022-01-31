OpenExposure(caseId: number, UrlList: string[], IsEdit: boolean, IsFocused, review, respond) {
    const openType = IsEdit ? 'edit' : 'view';
    const location: string = '/exposure/' + openType + '/';
    const queryParam = review ? ';isaddreview=true' : '';
    let locationToOpen = window.location.origin + location + caseId + queryParam;
    const windowAlreadyOpen = this.onlineService.IsWindowViewAlreadyOpen(caseId, UrlList, IsEdit);
    if (windowAlreadyOpen) {
      locationToOpen = ''; // blank should bring the already existing window to the front.
    }

    const openedWindow = window.open(locationToOpen, openType + '/' + caseId + queryParam);
    if (!openedWindow) {
      alert(AppConstants.Messages.PopupBlockerEnabled);
      return;
    }
    if (openedWindow.location.href === 'about:blank') {
      (openedWindow.location.href = window.location.origin + location + caseId + queryParam), openType + '/' + caseId + queryParam;
    }
    if (IsFocused) {
      openedWindow.focus();
      window.blur();
    }
    if (!windowAlreadyOpen) {
      UrlList.push(openType + '/' + caseId);
    }
  }



  
  patientChange(event) {
    if (this.exposureDetails['exposureId'] != event.itemData.exposureId) {
      let locationToOpen = window.location.origin + "/exposure/edit/" + event.itemData.exposureId;
      const openedWindow = window.open(locationToOpen, 'edit' + '/' + event.itemData.exposureId);
      if (!openedWindow) {
        alert(AppConstants.Messages.PopupBlockerEnabled);
        this.multiCaseDropDownObj.value = this.exposureDetails['exposureId'];
        this.multiCaseDropDownObj.refresh();
        return;
      }
      this.multiCaseDropDownObj.value = this.exposureDetails['exposureId']; 
      // this.multiCaseDropDownObj.select
    }
  }