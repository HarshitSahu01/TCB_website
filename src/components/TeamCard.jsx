import Link from "next/link";
import Image from "next/image";

export default function TeamCard({
  team_name,
  member_name,
  position,
  image,
  accounts,
  style = {},
}) {
  const showTeamOnly =
    !!team_name && !member_name && !position && !image && !accounts;

  return (
    <div
      className="relative flex-none w-36 sm:w-40 md:w-44 lg:w-52 xl:w-56 aspect-[2/3] rounded-[24px]"
      style={{
        ...style,
      }}
    >
      <div
        className="relative rounded-[24px] h-full w-full"
        style={{
          overflow: "hidden",
          WebkitOverflowScrolling: "auto",
          clipPath: "inset(0 round 24px)",
          willChange: "transform",
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#283030] via-[#070a09] to-[#1e1e1e]" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(12,14,13,0.06) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.85) 100%)",
            mixBlendMode: "normal",
            zIndex: 5,
          }}
        />

        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: "56%",
            height: "56%",
            transform: "translate(15%, -15%)",
            background:
              "radial-gradient(circle at top right, rgba(20,129,119,0.95) 0%, rgba(12,90,82,0.55) 35%, rgba(8,40,38,0.12) 65%, transparent 80%)",
            filter: "blur(36px)",
            borderBottomLeftRadius: "999px",
            zIndex: 10,
          }}
        />

        <div
          className="absolute bottom-0 left-0 pointer-events-none"
          style={{
            width: "56%",
            height: "56%",
            transform: "translate(-15%, 15%)",
            background:
              "radial-gradient(circle at bottom left, rgba(20,129,119,0.95) 0%, rgba(12,90,82,0.55) 35%, rgba(8,40,38,0.12) 65%, transparent 80%)",
            filter: "blur(36px)",
            borderTopRightRadius: "999px",
            zIndex: 10,
          }}
        />

        <div className="absolute inset-0 z-20 rounded-[28px] pointer-events-none border border-white/8" />
        <div className="absolute -right-6 top-6 w-full h-full rounded-[28px] bg-black opacity-55 blur-[36px] z-[-2]" />
        <div className="absolute -right-12 top-12 w-full h-full rounded-[28px] bg-black opacity-30 blur-[56px] z-[-3]" />

        <div className="relative z-30 flex items-center justify-center h-full px-3">
          {showTeamOnly ? (
            <h2 className="text-zinc-300 text-sm sm:text-lg md:text-2xl tracking-wider text-center">
              {team_name}
            </h2>
          ) : (
            <div className="flex flex-col items-center text-center gap-1.5 sm:gap-2">
              {image && (
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden">
                  <Image
                    src={image}
                    alt={member_name || "Member"}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              )}

              {member_name && (
                <h3 className="text-zinc-300 text-sm text-md sm:text-lg md:text-xl tracking-wider leading-tight pt-2">
                  {member_name}
                </h3>
              )}

              {position && (
                <p className="text-zinc-300 text-sm sm:text-base md:text-md pb-2 leading-tight">
                  {position}
                </p>
              )}

              {accounts && accounts.length > 0 && (
                <div className="flex gap-2 mt-1">
                  {accounts.map((acc) => (
                    <Link
                      key={acc.name}
                      href={acc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                        <Image
                          src={acc.logo}
                          alt={acc.name}
                          width={64}
                          height={64}
                          className="object-contain hover:opacity-80 transition"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
