
let getCSRFToken = () => {
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
        const meta = metas[i];
        if (meta.getAttribute('name') === 'csrf-token') {
            return meta.getAttribute('content');
        }
    }

    return null;
};

export const ReloadPage = () => {
        window.location.href="/";
        e.preventDefault();
}


export const fetchDataOption = (method) => {
    if (getCSRFToken() != null) {
        return {
            method: method,
            headers: {
                'X-CSRF-Token': getCSRFToken(),
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'same-origin'
        }
    }

    return null;
}

export const GetDataFromServer = (method, url) => {
    fetch(url, fetchDataOption('GET'))
          .then(resp => {
              if (resp.ok) {
                  resp.json().then(json => {
                      return json;
                  });
              }
              else
              {
                    ReloadPage();
              }
          })
          .catch(function(error) {
              ReloadPage();
          });
}


export default {fetchDataOption, GetDataFromServer, ReloadPage}


