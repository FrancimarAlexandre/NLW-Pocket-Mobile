import { View, Text } from "react-native";
import { s } from "./styles"
import { Step } from "@/components/step"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"
export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>

            <Step 
            icon = {IconMapPin}
            title="Encontre estabelecimentos"
                description="Veja locais perto de você qque são parceiros Nearby" />

            <Step 
            icon={IconQrcode}
            title="Ative o cupom com QR Code"
                description="Escaneia o código no esyabelecimento para usar o benefício" />

            <Step 
                icon = {IconTicket}
            title="Garanta vantegens perto de você"
                description="Ative onde estiver, em diferentes tipos de estabelecimento" />
        </View>
    )
}