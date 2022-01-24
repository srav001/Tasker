import { toastController } from '@ionic/vue';

const openToast = async(msg: string, color: string) => {
    const toast = await toastController
        .create({
            message: msg,
            duration: 1000,
            position: 'top',
            animated: true,
            mode: 'ios',
            color
        })
    return toast.present();
};

export default openToast;

// export const openToastOptions = async() => {
//     const toast = await toastController
//         .create({
//             header: 'Toast header',
//             message: 'Click to Close',
//             position: 'top',
//             buttons: [
//                 {
//                     side: 'start',
//                     icon: 'star',
//                     text: 'Favorite',
//                     handler: () => {
//                         console.log('Favorite clicked');
//                     }
//                 }, {
//                     text: 'Done',
//                     role: 'cancel',
//                     handler: () => {
//                         console.log('Cancel clicked');
//                     }
//                 }
//             ]
//         })
//     await toast.present();

//     const { role } = await toast.onDidDismiss();
//     console.log('onDidDismiss resolved with role', role);
// };