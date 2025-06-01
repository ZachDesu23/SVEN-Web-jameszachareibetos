import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeroSection, Section } from "./Components/Sections";
import Nav from "./Components/Nav";
import Button from "./Components/Button";
import ImageCard from "./Components/Image";
import { useForm } from "@inertiajs/react";
import Swal from 'sweetalert2';

const textColor = "#535973";

function Home() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const [navStyles, setNavStyles] = useState({
        textColor: "white",
    });
    const { data, setData, post, reset, processing, errors } = useForm({
        frequency: '',
        startdate: '',
        days: '',
        times: '',
        notes: '',
    })

    function submit(e) {
        e.preventDefault();

        post('/posts', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                 Swal.fire({
                    icon: 'success',
                    title: 'Scheduled!',
                    text: 'Your service has been successfully scheduled.',
                    confirmButtonColor: '#000',
                });
            },
            onError: () => {
            }
        });
    }


    const today = new Date().toISOString().split('T')[0]
    
    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });

            if (ref === aboutRef) {
                setNavStyles({
                    textColor: "#535973",
                });
            } else {
                setNavStyles({
                    textColor: "white",
                });
            }
        }
    };

    return (
        <div style={{ fontFamily: "'Open Sans', sans-serif" }}>
            <Nav
                scrollToSection={scrollToSection}
                homeRef={homeRef}
                aboutRef={aboutRef}
                contactRef={contactRef}
                navTextColor={navStyles.textColor}
            />
            <div>
                <HeroSection ref={homeRef}>
                    <div className="container">
                        <div className="row justify-content-center justify-content-lg-end">
                            <div className="col-12 col-md-10 col-lg-6 text-center text-lg-end">
                                <h1 className="display-4 fw-bold text-light">
                                    We care for your furry little loved ones
                                </h1>
                                <Button
                                    className="btn px-4 btn-light mt-3 border rounded-pill"
                                    onClick={() => scrollToSection(contactRef)}
                                    color={"black"}
                                >
                                    Schedule a visit
                                </Button>
                            </div>
                        </div>
                    </div>
                </HeroSection>
                <Section
                    ref={aboutRef}
                    bgColor="#FFFF"
                    className="align-items-center "
                >
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-lg-5 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start mb-4 mb-lg-0">
                                <h1
                                    className="fw-bold"
                                    style={{ color: textColor }}
                                >
                                    Expert care for your furry, feathery, or
                                    scaley friend
                                </h1>
                                <p
                                    className="my-3"
                                    style={{ color: textColor }}
                                >
                                    We know how stressful it is to leave your
                                    pets at home alone. We're a team of
                                    experienced animal caregivers, well
                                    connected to local veterinarians. Trust to
                                    us to love them like our own, and to keep
                                    them safe and happy till you're home
                                </p>
                                <Button
                                    className="btn px-4 mt-3 border rounded-pill"
                                    style={{ backgroundColor: "black" }}
                                    onClick={() => scrollToSection(contactRef)}
                                    backgroundColor={textColor}
                                    color="white"
                                >
                                    Schedule a visit
                                </Button>
                            </div>

                            <div className="col-12 col-lg-7 p-5">
                                <div className="row g-1">
                                    <ImageCard
                                        src="/images/cat.jpg"
                                        alt="Cat"
                                    />
                                    <ImageCard
                                        src="/images/parrot.jpg"
                                        alt="Parrot"
                                    />
                                    <ImageCard
                                        src="/images/dog2.png"
                                        alt="Dog"
                                    />
                                    <ImageCard
                                        src="/images/hamster.jpg"
                                        alt="Hamster"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section ref={contactRef} className="w-100">
                    <div className="d-flex flex-column flex-lg-row w-100">
                        <div
                            style={{
                                backgroundColor: textColor,
                                flex: "0 0 45%",
                            }}
                            className="text-white py-5 px-4 px-lg-5"
                        >
                            
                            <div className="d-flex flex-column align-items-center mb-3 px-5 mt-5">
                                <h2 className="fw-bold">All Services include:</h2>
                                <ul className="mt-3 ps-3 justify-content-lg-end h4">
                                    <li>A photo update for you</li>
                                    <br />
                                    <li>Notifications of sitter arrival</li>
                                    <br />
                                    <li>
                                        Treats for your pet, with your approval
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            style={{ backgroundColor: "#f7eceb", flex: "0 0 55%" }}
                            className="text-dark py-5 px-4 px-lg-5"
                        >
                            <div className="p-5">
                                <h1 className="fw-bold mb-4 w-75" style={{color:textColor}}>We’ll take your dog for a walk. Just tell us when!</h1>
                            
                                <form onSubmit={submit}>
                                    <div className="row justify-content-evenly">
                                        <div className="mb-3 col-12 col-md-6 d-flex flex-column">
                                            <label className="form-label fw-semibold">Frequency</label>
                                            <div className="btn-group bg-white w-100">
                                            <Button type="button" className={`btn btn-outline-dark ${data.frequency === 'recurring' ? 'active' : ''}`}
                                                onClick={() => setData('frequency', 'recurring')}
                                            >
                                                Recurring
                                            </Button>
                                            <Button type="button" className={`btn btn-outline-dark ${data.frequency === 'onetime' ? 'active' : ''}`}
                                                onClick={() => setData('frequency','onetime')}
                                            >
                                                One time
                                            </Button>
                                            </div>
                                              {errors.frequency && <div className="text-danger small mt-1">{errors.frequency}</div>}
                                        </div>

                                        <div className="mb-3 col-12 col-md-6">
                                            <label className="form-label fw-semibold">Start date</label>
                                            <input
                                            type="date"
                                            className="form-control"
                                            placeholder="MM/DD/YYYY"
                                            min={today}
                                            value={data.startdate}
                                            onChange={(e) => setData('startdate', e.target.value)}
                                            />
                                             {errors.startdate && <div className="text-danger small mt-1">{errors.startdate}</div>}
                                        </div>
                                      
                                          
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Days</label>
                                        <div className="d-flex flex-row gap-2 ">
                                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                                            <button key={day} type="button" onClick={()=>setData('days', day)} className={`btn w-100 btn-light ${data.days === day ? 'active' : ''}`}>{day}</button>
                                            ))}
                                    
                                        </div>
                                        {errors.days && <div className="text-danger small mt-1">{errors.days}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Times</label>
                                        <div className="d-flex flex-row gap-2">
                                            {["Morning", "Afternoon", "Evening"].map((time) => (
                                            <button key={time} type="button" onClick={()=>setData('times',time)} className={`btn btn-light w-100 ${data.times === time ? 'active' : ''}`}>{time}</button>
                                            ))}
                                        </div>
                                        {errors.times && <div className="text-danger small mt-1">{errors.times}</div>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Notes for your sitter</label>
                                        <textarea className="form-control" placeholder="Route preferences, leash location, treats given, etc." rows={4} value={data.notes}
                                            onChange={(e) => setData('notes', e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="d-flex flex-column align-items-center ">
                                         <Button
                                            type="submit"
                                            onClick={()=>scrollToSection(contactRef)}
                                            className="btn px-4 mt-3 border rounded-pill"
                                            style={{ backgroundColor: "black" }}
                                            backgroundColor={textColor}
                                            color="white"
                                            >
                                            Schedule Service
                                        </Button>

                                    </div>
                                </form>
                                </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
}

export default Home;
