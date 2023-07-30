# Import the `datetime` module to work with dates and times
import datetime

# Define a function to calculate the time required to reach the wall threshold points
def calculate_time_on_wall(R, P):
    # Calculate the time in seconds required to reach the points with the given number of people
    time_seconds = R / P
    return divmod(time_seconds, 3600)

# Check if the script is being run as the main program
if __name__ == "__main__":
    try:
        # Print some information about the purpose of the script
        print()
        print("This Mathematical formula solves the amount of hours minutes and seconds left on a wall. Intended for Torn City.")
        print("Enter the values that apply to the current situation on your wall")
        print()

        # Prompt the user to input the remaining threshold points (R) and number of people (P) on the wall
        R = int(input("Enter the remaining points left on the wall (R): "))
        P = int(input("Enter the number of people on the wall (P): "))

        # Calculate the time required using the `calculate_time_on_wall()` function
        hours, remainder_seconds = calculate_time_on_wall(R, P)
        minutes, seconds = divmod(remainder_seconds, 60)

        # Print the calculated time in hours, minutes, and seconds
        print(f"The time taken to reach {R} points with {P} people on the wall is approximately {int(hours)} hours, {int(minutes)} minutes, and {int(seconds)} seconds.")

        # Get the current time using `datetime.datetime.now()`
        current_time = datetime.datetime.now()

        # Calculate the future time by adding the hours, minutes, and seconds to the current time using `datetime.timedelta`
        future_time = current_time + datetime.timedelta(hours=int(hours), minutes=int(minutes), seconds=int(seconds))

        # Print the calculated future time when the wall would be completed if started immediately
        print(f"If you start now, you'll finish at: {future_time.strftime('%Y-%m-%d %H:%M:%S')}")
    except ValueError:
        # Handle the case when the user enters invalid input (non-integer values for R and P)
        print("Please enter valid integers for R and P.")
