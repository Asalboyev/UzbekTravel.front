'use client'
import { MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

export default function PaymePage() {
    const searchParams = useSearchParams();

    const price = searchParams.get('price');

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center p-4">

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Payment Receipt */}
                <Card className="p-6 bg-white border-0 shadow-2xl">
                    <Image src={"/images/payme.png"} alt="payme icon" width={220} height={100} />
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Чек к оплате</h2>

                    {/* Company Info */}
                    <div className="flex flex-col items-center mb-6">
                        <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-3">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-blue-900">SAMINA AZ TOUR</h3>
                    </div>

                    <div className="text-center text-gray-600 mb-6">ООО "SAMINA AZ TOUR" МCHJ»</div>

                    {/* Order Details */}
                    <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Номер заказа:</span>
                            <span className="font-semibold">915991</span>
                        </div>
                    </div>

                    {/* Payment Details Section */}
                    <div className="border-t pt-4">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-gray-700 font-medium">Детали платежа</h4>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Статус:</span>
                                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">Не оплачено</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600"></span>
                                <span className="text-sm text-gray-500">16.06.25 13:27</span>
                            </div>

                            <div className="flex justify-between font-semibold">
                                <span className="text-gray-700">Сумма платежа:</span>
                                <span className="text-lg">{price}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-8">
                        <Button variant="outline" className="flex-1 bg-transparent">
                            Отмена
                        </Button>
                        <Button variant="outline" className="flex-1 bg-transparent">
                            Поделиться
                        </Button>
                    </div>
                </Card>

                {/* Right side - Payment Form */}
                <Card className="p-6 bg-white">
                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Оплата без регистрации</h2>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Номер карты</label>
                            <Input type="text" placeholder="0000 0000 0000 0000" className="text-lg tracking-wider" maxLength={19} />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Input type="text" placeholder="ММ/ГГ" className="text-center" maxLength={5} />
                            </div>
                            <div>
                                <Input type="text" placeholder="CVV" className="text-center" maxLength={3} />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm text-gray-600 mb-2">Имя держателя карты</label>
                            <Input type="text" placeholder="CARDHOLDER NAME" className="uppercase" />
                        </div>

                        <Button className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-3 text-lg font-semibold mt-6">
                            Оплатить {price}
                        </Button>


                        <div className="text-xs text-gray-500 text-center mt-4">
                            Нажимая кнопку "Оплатить", вы соглашаетесь с условиями использования
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}

