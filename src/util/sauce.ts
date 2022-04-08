export function getSauce(description: string): string {
    const lines = description.split("\n");
    const sauce = lines.find(line => line.toLowerCase().startsWith("sauce:"));
    if (sauce) {
        return sauce.substring(6).trim().toLowerCase();
    } else {
        return "none";
    }
}