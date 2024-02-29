import { antonio } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/W0GVTA04IvJ
 */
export default function FaqArticle() {
  return (
			<div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
				<article className="max-w-6xl mx-auto prose prose-zinc dark:prose-invert">
					<div className="space-y-2 not-prose">
						<h1
							className={cn(
								"text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]",
								antonio.className,
							)}
						>
							Frequently Asked Questions
						</h1>
						{/* <p className="text-zinc-500 dark:text-zinc-400">
            Posted on November 10, 2023
          </p> */}
					</div>
					<Image
						alt="Cover image"
						className="aspect-video w-[500px] overflow-hidden rounded-lg object-cover my-3"
						height="340"
						src="/images/faq.jpg"
						width="1250"
					/>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						What is a gas geyser?
					</h2>
					<p className="text-base">
						A Gas Geyser, also known as a Gas Water Heater, is a water heating
						system that runs on gas. The traditional gas geyser does not have a
						reservoir to store hot water. Instead, it heats the water instantly/
						on-demand. If someone opens the hot tap, the gas geyser will
						activate and send hot water to the tap. The gas geyser will
						deactivate when the tap is closed and stop producing hot water.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						How does a gas geyser work?
					</h2>
					<p className="text-base">
						As soon as a hot water tap is opened, water flows through the pipes
						at a sufficient flow. That flow triggers a sensor inside the gas
						geyser, igniting the gas burner. The water flows through the pipes
						absorbing the maximum heat emitting from the heat exchanger. Once
						the tap is turned off, the sensor again is triggered, and the burner
						switches off.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						What type of gas do your gas geysers use?
					</h2>
					<p className="text-base">
						Gas geysers use Liquefied Petroleum Gas (LPG), a combination of
						butane, propane, or a mix. LPG is a clean burning and efficient
						hydrocarbon gas produced by-product of oil refining or natural gas
						extraction. When compressed in a tank or cylinder, it becomes a
						liquid released as a gas.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Why use LPG?
					</h2>
					<p className="text-base">
						Please click on this link so you can read all about why using LPG is
						a very sensible thing to do:{" "}
						<Link
							href="https://www.hotwater24.com/why-us"
							className="font-bold text-brand"
						>
							Why Us
						</Link>
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Do I need a Certificate of Compliance/Conformity (CoC) for my gas
						installation?
					</h2>
					<p className="text-base">
						A CoC is proof that your gas installation is safe and complies with
						the rules and regulations laid out in the South African National
						Standards (SANS) 10087-1.
					</p>
					<p className="text-base">
						The law requires that you be always in possession of a CoC for gas
						installations, as does your insurance company. If your property
						suffers damage from a gas fault, your insurance company will expect
						you to produce a valid certificate. Not being able to produce one
						may invalidate your claim.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						When must a CoC be issued?
					</h2>
					<h3 className="text-lg font-bold text-slate-700">
						A Certificate of Conformity (CoC) must be issued for a PERMANENT
						installation:
					</h3>
					<ul className="pl-5 text-sm list-disc text-slate-700">
						<li>On completion of a new gas installation,</li>
						<li>
							After any modification, alteration, or maintenance of an existing
							gas installation
						</li>
						<li>
							On change of ownership of a property housing an existing gas
							installation. (When you sell your property).
						</li>
					</ul>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						What is a permanent gas installation?
					</h2>
					<p className="text-base">
						Legislation deems a permanent gas installation to be a gas
						installation that is a fixture in a building, immovable and not of a
						temporary nature. This would include all built-in gas equipment –
						Gas fires, Heaters, Gas Braais, Stoves, Ovens, and Hot water
						systems. Movable gas heaters and gas braais on wheels are seen as
						temporary and do not require a CoC.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						How regularly must an LPG installation be serviced?
					</h2>
					<p className="text-base">
						According to legislation, the manifold system (which includes the
						regulator/s) should be inspected and serviced at intervals not
						exceeding five years.
					</p>

					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Am I allowed to have a gas cylinder inside my house?
					</h2>
					<h3 className="text-lg font-bold text-slate-700">
						Yes, according to the SA National Standards (SANS).
					</h3>
					<ul className="pl-5 text-sm list-disc text-slate-700">
						<li>
							If you live in a flat, you may have a maximum of 9kg gas either
							stored or permanently installed inside.
						</li>
						<li>
							If you live in either a free-standing house, cluster house or
							in-group housing (not exceeding two storeys), you are entitled to
							a maximum of 19kg. There are, however, strict regulations
							regarding the positioning of gas cylinders inside a flat or house
							and necessary ventilation.
						</li>
					</ul>

					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						What makes gas geysers different?
					</h2>
					<p className="text-base">
						Gas geysers are the most energy-efficient geysers available. Unlike
						the traditional electric geyser that acts as a reservoir for your
						water, heating it constantly over time - gas geysers don't store
						copious amounts of water internally. Instead, gas geysers heat water
						on demand. Meaning they only heat water when your hot water tap is
						turned on.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Why should I choose a gas geyser over an electric geyser?
					</h2>
					<p className="text-base">
						Well, for starters, gas geysers supply endless hot water as long as
						you have gas
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Are gas geysers safe for home use?
					</h2>
					<p className="text-base">
						YES. ABSOLUTELY! Gas geysers are 100% safe, provided you work with
						professional experts, registered suppliers, and installers like us.
						There is no shortcut around this – Precautious and adequate safety
						measures must be taken to select, install, and use any gas geyser.
						ALL our gas geysers have safety features: a flame failure device, an
						over-heat protection device, a gas and water stability device, a
						combustion safety device, and an oxygen depletion sensor device.
					</p>
					<ul className="pl-5 text-sm list-disc text-slate-700">
						<li>
							<h4 className="text-base font-bold">
								Install in a well-ventilated area.
							</h4>
							If you live in a flat, you may have a maximum of 9kg gas either
							stored or permanently installed inside.
						</li>
						<li>
							<h4 className="text-base font-bold">
								Be on the Lookout for gas Leaks.
							</h4>
							The second measure that ensures safety is to ALWAYS be on the
							lookout for gas leaks. Loosely fitted pipes or other utility
							fixtures become one of the most common causes of gas leaks at
							home. Be exceptionally vigilant when it comes to gas leaks!
						</li>
						<li>
							<h4 className="text-base font-bold">
								Keep out of reach of children!
							</h4>
							Like any potentially harmful device, KEEP OUT OF CHILDREN'S REACH!
							NEVER ask your child to turn on or off the gas geyser or let them
							fiddle its knobs. We always install your gas geyser in an area out
							of reach of children and recommend that you keep it locked. In
							instances where the home has limited placement, for example, in an
							apartment building, we install a safety grill around the geyser to
							ensure the safety of young children.
						</li>
						<li>
							<h4 className="text-base font-bold">
								Keep a watchful eye on your thermostat.
							</h4>
							The thermostat allows you to set your temperature at your desired
							levels. Avoid setting your temperature to 'very hot' for extended
							periods, as boiling water can accumulate extreme steam pressures.
							So, please re-set your thermostat to your 'normal' temperature
							after using boiling water. Fortunately for you, ALL our gas
							geysers are modern and have safety features that make them very
							safe. For example, if there is increased heat in the gas geyser,
							it has temperature sensors for the air temperature exiting the
							unit. If the temperature is too high, it will stop supplying gas
							to the burners. If that were to fail, there is a second water
							temperature sensor. If the outgoing water temperature is too high,
							it will stop supplying gas to the burner.
						</li>
						<li>
							<h4 className="text-base font-bold">
								Servicing and Maintenance.
							</h4>
							We keep track of our purchases to remind ALL our clients of the
							need for one of our installers to come and run a thorough
							service/maintenance on your gas geyser every 12 months. Your gas
							geyser needs to be maintained regularly like any mechanised item,
							including your car, washing machine, and stove. If your gas geyser
							hasn't been used for a while, please contact us, and one of our
							expert technicians will inspect it before turning it on.
						</li>
					</ul>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Why are gas geysers great?
					</h2>
					<ol className="pl-5 text-sm list-decimal text-slate-700">
						<li>
							Gas water geysers provide Just in Time heating! Use It Right Now!
							Hot water. They don't store the hot water to pre-heat. Instead,
							they instantaneously heat your water as it passes through the gas
							appliance.
						</li>
						<li>
							You aren't wasting energy by constantly heating the water. From a
							cost perspective, it will cost you less to run and operate a gas
							geyser than paying for electricity, based on the gas you use.
						</li>
						<li>
							You only need to set it to your desired temperature. For some
							arbitrary reason, Electric geysers in South Africa are typically
							set to 65 degrees Celsius. Anything higher than 50 degrees is
							likely to scorch you. That's why we usually mix in cold water to
							reach a tolerable temperature. How wasteful!
						</li>
					</ol>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Where is a gas geyser installed?
					</h2>
					<p className="text-base">
						The majority of the gas geysers are installed on the outside of
						buildings mainly for safety reasons for better ventilation, easy
						access to gas cylinders or piped gas lines as well as no issues
						drilling holes in ceilings for the installation of flue pipes.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Do I have to have the gas geyser or gas cylinder inside my house?
					</h2>
					<p className="text-base">
						No, not necessarily. It is even more recommendable to install the
						gas geyser on the outside of the building mainly for safety reasons
						for better ventilation, easy access to gas cylinders or piped gas
						lines as well as no issues drilling holes in ceilings for the
						installation of flue pipes.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Why do you have an installation charge for plumbing as well as for
						gas, what is the difference?
					</h2>
					<p className="text-base">
						Gas geysers tap into the existing waterlines coming from your
						electrical geyser. Gas geysers are in general installed close to the
						main bathroom(s), so the hot water does not have to travel so far
						and you have access to hot water almost instantly. So instead of the
						water traveling through the electrical geyser it is now being
						directed into the gas geyser. The gas geyser will also have to be
						connected to gas via gas cylinders or piped gas (natural gas or
						LPG). Inlet: gas and water (cold); outlet: water (hot).
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Can I purchase the gas geyser and you just install it?
					</h2>
					<p className="text-base">
						Yes, you can, but Hotwater24 only works with certain brands as we do
						not want to jeopardize on safety as we only want to work with proven
						and renown gas geyser brands that have proven their quality,
						durability, efficiency and have a proven track records when it comes
						to service & maintenance.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Can the gas cylinder supply a gas stove and a gas geyser, or does it
						have to run separately?
					</h2>
					<p className="text-base">
						Both appliances (gas geyser and gas stove) can run from the same gas
						cylinder.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						How long does it take to complete an installation?
					</h2>
					<p className="text-base">
						An installation on average takes 1 full day to complete when it
						concerns 1 single unit and in case it is for an existing building
						(not under construction). In some cases, when multiple units are
						involved, the installation can take up to 2 days.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Is the water flow from a borehole sufficient to operate a gas
						geyser?
					</h2>
					<p className="text-base">
						Yes, but the gas geyser only operates at a certain pressure, so when
						we come out and do a site inspection, we will check the pressure of
						the water in order to recommend the correct gas geyser. In case the
						pressure is too low, we will also mention. Borehole water has to be
						filtered.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Do you offer other gas solutions?
					</h2>
					<p className="text-base">
						Yes, we also offer the installation of gas stoves, fire places and
						even gas sauna’s.
					</p>
					<h2
						className={cn(
							"text-xl md:text-2xl lg:text-3xl text-slate-700 mt-5 my-2",
							antonio.className,
						)}
					>
						Can I buy a gas geyser separately?
					</h2>
					<p className="text-base">
						Yes you can, we do offer the geysers standalone without
						installation.
					</p>
				</article>
			</div>
		);
}
