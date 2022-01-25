import { toastController } from '@ionic/vue';

const openToast = async (msg: string, color: string) => {
    const toast = await toastController.create({
        message: msg,
        duration: 1000,
        position: 'top',
        animated: true,
        mode: 'ios',
        color,
    });
    return toast.present();
};

export default openToast;
