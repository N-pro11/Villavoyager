import { useState } from "react";
import { Search, MapPin, Calendar, Users, ChevronDown, Minus, Plus } from "lucide-react";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const destinations = [
  "Bali, Indonesia",
  "Ubud, Bali",
  "Seminyak, Bali",
  "Nusa Dua, Bali",
  "Canggu, Bali",
  "Maldives",
  "Phuket, Thailand",
  "Koh Samui, Thailand",
];

interface SearchBarProps {
  variant?: "hero" | "footer";
}

const SearchBar = ({ variant = "hero" }: SearchBarProps) => {
  const isHero = variant === "hero";
  const pillBg = isHero ? "bg-white/80 backdrop-blur-md" : "bg-white/90 backdrop-blur-md";

  const [destination, setDestination] = useState("");
  const [destOpen, setDestOpen] = useState(false);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(1);
  const [guestsOpen, setGuestsOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-2">
      {/* Where — Dropdown */}
      <Popover open={destOpen} onOpenChange={setDestOpen}>
        <PopoverTrigger asChild>
          <button className={`${pillBg} rounded-full flex items-center gap-3 px-5 py-3 flex-1 shadow-md text-left`}>
            <MapPin size={16} className="text-muted-foreground shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] tracking-[0.12em] font-inter font-semibold text-foreground uppercase">Where</p>
              <p className={cn("text-sm font-inter truncate", destination ? "text-foreground" : "text-muted-foreground/60")}>
                {destination || "Where are you going?"}
              </p>
            </div>
            <ChevronDown size={14} className="text-muted-foreground shrink-0" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-2" align="start">
          {destinations.map((d) => (
            <button
              key={d}
              onClick={() => { setDestination(d); setDestOpen(false); }}
              className="w-full text-left px-3 py-2 text-sm font-inter rounded-lg hover:bg-secondary transition-colors text-foreground"
            >
              {d}
            </button>
          ))}
        </PopoverContent>
      </Popover>

      {/* Check-in — Calendar */}
      <Popover>
        <PopoverTrigger asChild>
          <button className={`${pillBg} rounded-full flex items-center gap-3 px-5 py-3 flex-1 shadow-md text-left`}>
            <Calendar size={16} className="text-muted-foreground shrink-0" />
            <div>
              <p className="text-[10px] tracking-[0.12em] font-inter font-semibold text-foreground uppercase">Check-in</p>
              <p className={cn("text-sm font-inter", checkIn ? "text-foreground" : "text-muted-foreground/60")}>
                {checkIn ? format(checkIn, "MMM dd, yyyy") : "Add Dates"}
              </p>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarUI
            mode="single"
            selected={checkIn}
            onSelect={setCheckIn}
            disabled={(date) => date < new Date()}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>

      {/* Check-out — Calendar */}
      <Popover>
        <PopoverTrigger asChild>
          <button className={`${pillBg} rounded-full flex items-center gap-3 px-5 py-3 flex-1 shadow-md text-left`}>
            <Calendar size={16} className="text-muted-foreground shrink-0" />
            <div>
              <p className="text-[10px] tracking-[0.12em] font-inter font-semibold text-foreground uppercase">Check-out</p>
              <p className={cn("text-sm font-inter", checkOut ? "text-foreground" : "text-muted-foreground/60")}>
                {checkOut ? format(checkOut, "MMM dd, yyyy") : "Add Dates"}
              </p>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <CalendarUI
            mode="single"
            selected={checkOut}
            onSelect={setCheckOut}
            disabled={(date) => date < (checkIn || new Date())}
            initialFocus
            className={cn("p-3 pointer-events-auto")}
          />
        </PopoverContent>
      </Popover>

      {/* Who — Guest counter */}
      <Popover open={guestsOpen} onOpenChange={setGuestsOpen}>
        <PopoverTrigger asChild>
          <button className={`${pillBg} rounded-full flex items-center gap-3 px-5 py-3 flex-1 shadow-md text-left`}>
            <Users size={16} className="text-muted-foreground shrink-0" />
            <div className="flex-1">
              <p className="text-[10px] tracking-[0.12em] font-inter font-semibold text-foreground uppercase">Who</p>
              <p className={cn("text-sm font-inter", guests > 1 ? "text-foreground" : "text-muted-foreground/60")}>
                {guests > 1 ? `${guests} guests` : "Add guests"}
              </p>
            </div>
            <ChevronDown size={14} className="text-muted-foreground shrink-0" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-52 p-4" align="start">
          <p className="text-sm font-inter font-semibold text-foreground mb-3">Guests</p>
          <div className="flex items-center justify-between">
            <button
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="font-inter text-lg font-semibold text-foreground">{guests}</span>
            <button
              onClick={() => setGuests((g) => Math.min(20, g + 1))}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>
        </PopoverContent>
      </Popover>

      {/* Search button */}
      <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 py-3.5 flex items-center gap-2 font-inter font-medium text-sm tracking-wide transition-all shadow-md shrink-0 active:scale-95">
        <Search size={16} />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
