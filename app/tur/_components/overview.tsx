'use client'
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ITour } from "@/types"
import { useLocale } from "@/hooks/use-locale"

const Overview = ({ tour }: { tour: ITour }) => {
    const { t } = useLocale()
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Tabs defaultValue="account" className="w-full">
                <TabsList>
                    <TabsTrigger value="account">{t.get("tours.des-title")}</TabsTrigger>
                    <TabsTrigger value="password">{t.get("tours.map-title")}</TabsTrigger>
                    <TabsTrigger value="comment">{t.get("tours.customer-reviews")}</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-4">{t.get("tours.des-title")}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: tour?.desc || "" }}></p>
                </TabsContent>
                <TabsContent value="password">
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-4">{t.get("tours.map-title")}</h2>
                    <div className="bg-gray-100 rounded-2xl h-96 relative overflow-hidden">
                        <style>{`
                            .map-container iframe {
                                width: 100%;
                                height: 100%;
                                border: 0;
                                border-radius: 1rem;
                            }
                            `}</style>
                        <div
                            className="map-container w-full h-full"
                            dangerouslySetInnerHTML={{ __html: tour?.map || "" }}
                        />
                    </div>
                </TabsContent>
                <TabsContent value="comment">
                    <h2 className="text-3xl font-bold text-foreground mb-6 mt-4">{t.get("tours.customer-reviews")}</h2>
                    <div className="w-full min-h-[200px]">
                        {tour?.feedbacks?.length === 0 && (
                            <p className="text-muted-foreground">No reviews yet.</p>
                        )}
                        {tour?.feedbacks?.map((feedback) => (    
                            <div key={feedback.id} className="mb-6 border-b border-border pb-4">
                                <div className="flex items-center mb-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mr-4">
                                        {feedback.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">{feedback?.name}</p>    
                                    </div>
                                </div>  
                                <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: feedback?.feedback || ""}}></div>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </motion.div>
    )
}

export default Overview