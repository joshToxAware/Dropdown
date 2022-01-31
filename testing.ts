patientSelected(event) {
  if (this.exposureDetails['exposureId'] != event.itemData.exposureId) {
    if (this.newIsOnline != '' && this.newIsOnline == 'true') {
      var UrlList = { OpenedUrlList: [] };
      var isLoad = true;

      if (this.permissionService.isExposurePageHasEditPermission || this.permissionService.isExposurePageHasViewPermission) {
        if (
          window.localStorage[AppConstants.LocalStorage.UrlList] != undefined && window.localStorage[AppConstants.LocalStorage.UrlList] != null
            ? JSON.parse(window.localStorage[AppConstants.LocalStorage.UrlList]).OpenedUrlList.length > 0
              ? true
              : false
            : false
        ) {
          UrlList = JSON.parse(window.localStorage[AppConstants.LocalStorage.UrlList]);

          if (UrlList.OpenedUrlList.length > 0) {
            for (var i = 0; i < UrlList.OpenedUrlList.length; i++) {
              if (
                (event.itemData.exposureStatus == 'Open' &&
                  !this.permissionService.isExposurePageHasEditPermission &&
                  this.permissionService.isExposurePageHasViewPermission &&
                  UrlList.OpenedUrlList[i] == 'view/' + event.itemData.exposureId) ||
                (event.itemData.exposureStatus == 'Closed' && UrlList.OpenedUrlList[i] == 'view/' + event.itemData.exposureId) ||
                (event.itemData.exposureStatus == 'Open' && this.permissionService.isExposurePageHasEditPermission && UrlList.OpenedUrlList[i] == 'edit/' + event.itemData.exposureId)
              ) {
                isLoad = false;
              }
            }
            /* checking whether the user has permission to edit or view the exposure */
            if (this.permissionService.isExposurePageHasEditPermission || !this.permissionService.isExposurePageHasViewPermission) {
              if (event.itemData.exposureStatus == 'Closed') {
                if (isLoad == true) {
                  this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, false);
                } else {
                  this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, false);
                }
              } else if (event.itemData.exposureStatus == 'Open') {
                if (isLoad == true) {
                  if (event.itemData.exposureLock) {
                    // need to show the exposure lock showLockWarningModal
                  } else {
                    this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, true);
                  }
                } else {
                  this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, true);
                }
              }
            } else {
              /* if exposure has view permission alone */
              if (this.permissionService.isExposurePageHasViewPermission) {
                if (isLoad == true) {
                  this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, false);
                } else {
                  this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, false);
                }
              }
            }
          }
        }

        else {
          /* checking whether the user has permission to edit or view the exposure */
          if (this.permissionService.isExposurePageHasEditPermission || !this.permissionService.isExposurePageHasViewPermission) {
            if (event.itemData.exposureStatus == 'Closed') {
              if (isLoad == true) {
                this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, false);
              } else {
                this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, false);
              }
            } else if (status == 'Open') {
              if (isLoad == true) {
                if (event.itemData.exposureLock) {
                  // need to show the exposure lock showLockWarningModal
                } else {
                  this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, true);
                }
              } else {
                this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, true);
              }
            }
          } else {
            if (this.permissionService.isExposurePageHasViewPermission) {
              if (isLoad == true) {
                this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, false);
              } else {
                this.OpenExposure(event.itemData.exposureId, UrlList.OpenedUrlList, false);
              }
            }
          }
        } // else condition close brace of if URL list not stored in local storage.

        localStorage.setItem(AppConstants.LocalStorage.UrlList, JSON.stringify(UrlList));
      } else {
        // user has no exposure view and edit permission.
        // alerting user about permission denied.
        this.showPermissionDenied = true;
        this.permissionTitle = 'Permission Denied';
        this.permissionAlertContent = 'Permission denied to access exposures !';
      }
    }
  }

  this.multiCaseDropDownObj.value = this.exposureDetails['exposureId'];
  // this.multiCaseDropDownObj.select
}

OpenExposure(caseId: number, UrlList: string[], IsEdit: boolean) {
    const openType = IsEdit ? 'edit' : 'view';
    const location: string = '/exposure/' + openType + '/';

    let locationToOpen = window.location.origin + location + caseId;
    const windowAlreadyOpen = this.onlineService.IsWindowViewAlreadyOpen(caseId, UrlList, IsEdit);
    if (windowAlreadyOpen) {
      locationToOpen = ''; // blank should bring the already existing window to the front.
    }

    const openedWindow = window.open(locationToOpen, openType + '/' + caseId);
    if (!openedWindow) {
      alert(AppConstants.Messages.PopupBlockerEnabled);
      return;
    }
    if (openedWindow.location.href === 'about:blank') {
      (openedWindow.location.href = window.location.origin + location + caseId), openType + '/' + caseId;
    }

    openedWindow.focus();
    window.blur();

    if (!windowAlreadyOpen) {
      UrlList.push(openType + '/' + caseId);
    }
  }