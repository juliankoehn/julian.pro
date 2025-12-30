import "@calcom/atoms/globals.min.css";
import { CalProvider, BookerEmbed } from "@calcom/atoms";

interface BookerProps {
    username?: string;
    eventSlug?: string;
}

export default function BookerComponent({ username = "jkoehn", eventSlug = "30-min-meeting" }: BookerProps) {
    return (
        <CalProvider
            clientId=""
            options={{
                apiUrl: "https://api.cal.com/v2",
            }}
        >
            <div className="w-full cal-booker-dark">
                <BookerEmbed
                    eventSlug={eventSlug}
                    username={username}
                    view="MONTH_VIEW"
                    customClassNames={{
                        bookerContainer: "bg-transparent! border-none! w-full! max-w-none! [&_*]:text-white",
                        datePickerCustomClassNames: {
                            datePickerContainer: "bg-transparent!",
                            datePickerTitle: "text-white!",
                            datePickerDays: "text-gray-400!",
                            datePickerDate: "text-white! hover:bg-white/10! rounded-full!",
                            datePickerDatesActive: "bg-[#C8A97E]! text-white!",
                            datePickerToggle: "text-white! hover:bg-white/10!",
                        },
                        availableTimeSlotsCustomClassNames: {
                            availableTimeSlotsContainer: "bg-transparent!",
                            availableTimeSlotsHeaderContainer: "bg-transparent!",
                            availableTimeSlotsTitle: "text-white!",
                            availableTimes: "bg-white/5! border-white/10! text-white! hover:bg-white/10! rounded-lg! transition-all!",
                        },
                    }}
                />
            </div>
        </CalProvider>
    );
}
