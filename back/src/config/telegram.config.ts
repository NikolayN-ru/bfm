import { ITelegram } from "../telegram/telegram.interface";

export const getTelegramConfig = (): ITelegram => ({
    // curl https://api.telegram.org/bot5438812753:AAHgIY8Sp7CkMuGFDebx3G2zcvGWsgKmhu0/getUpdates
    chatId: '1246395647',
    token: '5438812753:AAHgIY8Sp7CkMuGFDebx3G2zcvGWsgKmhu0'
});