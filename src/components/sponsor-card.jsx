/**
 * GitHub Sponsors Card Component
 * Displays sponsor information from GitHub Sponsors
 */

export default function SponsorCard() {
    return (
        <div className="w-full max-w-2xl mx-auto my-8">
            <iframe
                src="https://github.com/sponsors/sudheerbhuvana/card"
                title="Sponsor sudheerbhuvana"
                height="225"
                width="100%"
                style={{ border: 0, maxWidth: '600px', margin: '0 auto', display: 'block' }}
                className="rounded-lg shadow-sm"
            />
        </div>
    );
}
