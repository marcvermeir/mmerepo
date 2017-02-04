function Parking(id,
                 name,
                 address,
                 description,
                 availableCapacity,
                 totalCapacity) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.description = description;
    this.availableCapacity = availableCapacity ? availableCapacity : Math.max();
    this.totalCapacity = totalCapacity;
    this.known = availableCapacity || availableCapacity >= 0 ? true : false;
}