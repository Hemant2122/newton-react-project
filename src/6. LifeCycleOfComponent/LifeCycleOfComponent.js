
// 3 Major LIFECYCLE FOR ANY COMPONENT (class or Functional)


/* 

1. Monuting : When I see MY COMPONENT for the 1st time IT IS MONUTING PHASE.

2. Update: When I change any STATE VARIABLE then the Update phase starts.

3. UnMonuting: When the component is TAKEN AWAYS from the Screen.

*/


// --------------- WHAT IS A SIDE EFFECT ----------------

// Doing anything that your UI HAS TO WAIT FOR (API CALL, adding settimeout, localstorage) is a Side effect.

// Why UseEffect ->  useEffect is the GURANTEE that if will After the UI  is shown (return has worked).
// It will work literally in the last.
