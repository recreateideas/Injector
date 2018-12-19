



    const setLocalStorage =  async () => {

        let allTabs = getObjectFromStorage('allTabs');
        console.log(allTabs);

        const injectionDelay = document.getElementById('injectionDelay').value;
        const localhostPort = document.getElementById('localhostPort').value;
        const fileSource = document.getElementById('fileSource').value;
        const hotReload = document.getElementById('hotReload').checked;
        const thisTab = await getTabId();
        // console.log(localhostPort);
        const tabDetails = {
            thisTab,
            injectionDelay,
            fileSource,
            localhostPort,
            hotReload,
        };
        allTabs[thisTab] = tabDetails;

        setObjectToStorage('allTabs', allTabs);
        localStorage.setItem('thisTab', thisTab);

    },

    getObjectFromStorage = (label) => {
        let object = localStorage.getItem(label);
        return object ? JSON.parse(object) : {};
    },

    setObjectToStorage = (label, object) => {
        localStorage.setItem(label, JSON.stringify(object));
    },

    removeLocalStorage = () => {
        localStorage.removeItem('injectionDelay');
        localStorage.removeItem('fileSource');
        localStorage.removeItem('hotReload');
        localStorage.removeItem('localhostPort', localhostPort);
    },

    setTabPropertyToStorage = (property,value) => {
        let allTabs = localStorage.getItem('allTabs');
        let thisTab = localStorage.getItem('thisTab');

        if(allTabs && allTabs !== '' && thisTab !== ''){
            allTabs = JSON.parse(allTabs);
            
            allTabs[thisTab][property] = value;

            localStorage.setItem('allTabs',JSON.stringify(allTabs));
        } else return;
    },

    getLocalStorage = () => {
        const allTabs = getObjectFromStorage('allTabs');
        let thisTab = localStorage.getItem('thisTab');
        if(typeof allTabs === 'object' && allTabs[thisTab]){
            const tabDetails = allTabs[thisTab];
            return { thisTab, injectionDelay, fileSource, localhostPort, hotReload } = tabDetails;
        } else return {};
    };