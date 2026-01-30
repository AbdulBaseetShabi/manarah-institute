import { Message } from "./types";

export enum MessageKey {
    donationUnavailable = 'donation_unavailable_message',
}

export const messages: Record<MessageKey, Message> = {
    [MessageKey.donationUnavailable]: {
        title: 'Thank You For Your Support',
        description: 'JazakaAllah Khair for your generosity and willingness to support our mission. We are currently working on setting up a donation system. Please check back soon or reach out to us for alternative ways to contribute.'
    },
};