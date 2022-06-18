import { showAlert } from './alert';
import axios from 'axios';

const baseUrl = "https://wedding-production-09d7.up.railway.app"

export const templatesEdit = async (
         templatesId,
        data
       ) => {
         try {
           const res = await axios({
             method: 'PUT',
             url: `${baseUrl}/api/v1/templates/${templatesId}`,
             data
           });
           if (res.data.status === 'success') {
             location.reload(true);
             showAlert('success', 'Update success');
           }
         } catch (err) {
           console.log(err.response);
           showAlert('error', 'Error, please try again');
         }
       };
