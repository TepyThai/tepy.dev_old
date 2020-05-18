import ProfileSvg from './SVG/ProfileSvg';
import Blob1 from './SVG/Blob1';

function Profile() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <div className="sm:hidden inline-block">
          <ProfileImage />
        </div>
        <div className="mb-32 sm:mb-0">
          <Detail />
        </div>
        <div className="hidden sm:inline-block">
          <ProfileImage />
        </div>
      </div>
    </>
  );
}

function Detail() {
  return (
    <>
      <div className="flex-col">
        <div className="relative">
          <Blob1
            className="w-64 opacity-25 absolute"
            style={{ top: '-30px', left: '-50px' }}
          />
          <Blob1
            className="w-64 opacity-25 absolute transform rotate-90"
            style={{ top: '-30px' }}
          />
          <span className="text-3xl uppercase text-teal-600 font-bold">
            Hi, I'm Tepy
          </span>
        </div>
        <div className="h-8"></div>
        <div className="block font-bold">Frontend Developer</div>
      </div>
    </>
  );
}

function ProfileImage() {
  return (
    <>
      <div className="p-8 w-auto h-auto">
        <ProfileSvg />
      </div>
    </>
  );
}

export default Profile;
