export default function GoogleMaps() {
  return (
    <section>
      <div className="flex flex-col items-center px-4">
        <h1 className="text-(--secondaryColor) text-4xl md:text-5xl my-20 font-bold text-center">
          FIND OUR OFFICE
        </h1>

        <div className="w-full max-w-5xl h-[70vh] rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.911494871751!2d76.98487167534223!3d8.507974296926392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b90c69aa89fd%3A0x168eb4fd8460c999!2sDivine%20Creators!5e0!3m2!1sen!2sin!4v1767067896174!5m2!1sen!2sin"
            title="googleMap"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
