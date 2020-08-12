export interface ISpaceXLaunchObject {
    flight_number: Number,
    mission_name: string;
    mission_id: string[];
    launch_year: Number;
    launch_success: boolean;
    land_success: boolean; // rocket.first_stage.cores[0].land_success
    imageUrl: String; //links.mission_patch
}