export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg">
        안녕하세요. 저는 임시현입니다.
      </p>
      <p className="text-lg mt-4">
        비밀스럽게 운영할 계획입니다.
      </p>

      <h2 className="text-3xl font-bold mt-8 mb-4">Education</h2>
      <ul className="list-inside text-lg">
        <li>
          <strong>Korea Advanced Institute of Science and Technology (KAIST)</strong> - Daejeon, South Korea, Department of Freshmen (2025~)
          <br />
        </li>
        <li>
          <strong>Gyeonggibuk Science Highschool</strong> - Uijeongbu, South Korea (2023~2025)
          <br /> KYPT 2024 Representative, Captain
        </li>
      </ul>
    </div>
  );
}
