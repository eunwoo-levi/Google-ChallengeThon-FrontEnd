interface NutritionDataProps {
  totalKcal: number;
  carbs: number;
  protein: number;
  fat: number;
  kalium: number;
  natrium: number;
  cholesterol: number;
  vitaminA: number;
  vitaminB: number;
  vitaminC: number;
  date: string;
}

export default function NutritionDisplay({ nutritionData }: { nutritionData: NutritionDataProps }) {
  return (
    <section className='w-full p-4 bg-white rounded-xl shadow-lg mb-[50px]'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6'>영양 분석 결과</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
        {/* 주요 영양소 */}
        <div className='bg-blue-50 rounded-lg p-4 border border-blue-100'>
          <h3 className='text-lg font-semibold text-blue-800'>총 칼로리</h3>
          <p className='text-2xl font-bold text-blue-600'>{nutritionData.totalKcal ?? 0} kcal</p>
        </div>

        <div className='bg-green-50 rounded-lg p-4 border border-green-100'>
          <h3 className='text-lg font-semibold text-green-800'>탄수화물</h3>
          <p className='text-2xl font-bold text-green-600'>{nutritionData.carbs ?? 0}g</p>
        </div>

        <div className='bg-red-50 rounded-lg p-4 border border-red-100'>
          <h3 className='text-lg font-semibold text-red-800'>단백질</h3>
          <p className='text-2xl font-bold text-red-600'>{nutritionData.protein ?? 0}g</p>
        </div>

        <div className='bg-yellow-50 rounded-lg p-4 border border-yellow-100'>
          <h3 className='text-lg font-semibold text-yellow-800'>지방</h3>
          <p className='text-2xl font-bold text-yellow-600'>{nutritionData.fat ?? 0}g</p>
        </div>

        {/* 비타민 */}
        <div className='bg-purple-50 rounded-lg p-4 border border-purple-100'>
          <h3 className='text-lg font-semibold text-purple-800'>비타민</h3>
          <div className='space-y-1'>
            <p className='text-purple-600'>A: {nutritionData.vitaminA ?? 0}mg</p>
            <p className='text-purple-600'>B: {nutritionData.vitaminB ?? 0}mg</p>
            <p className='text-purple-600'>C: {nutritionData.vitaminC ?? 0}mg</p>
          </div>
        </div>

        {/* 미네랄 */}
        <div className='bg-teal-50 rounded-lg p-4 border border-teal-100'>
          <h3 className='text-lg font-semibold text-teal-800'>미네랄</h3>
          <div className='space-y-1'>
            <p className='text-teal-600'>칼륨: {nutritionData.kalium ?? 0}mg</p>
            <p className='text-teal-600'>나트륨: {nutritionData.natrium ?? 0}mg</p>
            <p className='text-teal-600'>콜레스테롤: {nutritionData.cholesterol ?? 0}mg</p>
          </div>
        </div>
      </div>
    </section>
  );
}
