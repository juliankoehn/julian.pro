import { BookerEmbed } from "@calcom/atoms";
import React from "react";

interface BookerProps {
    username?: string;
    eventSlug?: string;
}

export default function BookerComponent({ username = "jkoehn", eventSlug = "30-min-meeting" }: BookerProps) {
    return (
        <div className="w-full text-white">
            <BookerEmbed
                eventSlug={eventSlug}
                username={username}
                view="MONTH_VIEW"
                customClassNames={{
                    bookerContainer: "bg-transparent! border-none! w-full! max-w-none!",
                    // Date Picker
                    datePickerCustomClassNames: {
                        datePickerContainer: "bg-transparent!",
                        datePickerTitle: "text-white!",
                        datePickerDays: "text-gray-400!",
                        datePickerDate: "text-white! hover:bg-white/10! rounded-full!",
                        datePickerDatesActive: "bg-primary! text-white!",
                        datePickerToggle: "text-white! hover:bg-white/10!",
                    },
                    // Time Slots
                    availableTimeSlotsCustomClassNames: {
                        availableTimeSlotsContainer: "bg-transparent!",
                        availableTimeSlotsHeaderContainer: "bg-transparent!",
                        availableTimeSlotsTitle: "text-white!",
                        availableTimes: "bg-white/5! border-white/10! text-white! hover:bg-white/10! rounded-lg! transition-all!",
                    },
                }}
            />
        </div>
    );
}
